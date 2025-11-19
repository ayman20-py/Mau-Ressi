import * as SecureStore from 'expo-secure-store';
import { Customer } from '../LogicControllers/CustomerClass';
import { Constants } from '../LogicControllers/SystemConstants';


// Respoonsible for manipulating the customer data in the database
export class CustomerManipulation {

    public static async addNewCustomer(value: Customer)  {
        try
        { 
            await this.getCustomers().then(async res => {
                console.log(res);
                res[value.getId()] = value;

                await SecureStore.setItemAsync(Constants.CUSTOMERKEY, JSON.stringify(res));
                return true;
            });
        }

        catch (error) {
            console.log(error);
            return false;
        }
    }

    // Return a json object containing all of the customers
    public static async getCustomers() {
        try{ 
            const result = await SecureStore.getItemAsync(Constants.CUSTOMERKEY);
            if (result !== null) {
                return JSON.parse(result);
            }
            else {
                return {};
            }
        }
        catch (error) {
            return {};
        }
    }


    // For testing purposes only, this function is used to delete all the customers' information in the database
    public static async deleteCustomer(key: string) {
        try {
            await SecureStore.deleteItemAsync(key);
            console.log("Deleted successfully");
        }
        catch (error) {
            console.log(error);
        }

    }

}

export async function addItem(key: string, value: string) { // For testing purposes
    try {
        await SecureStore.setItemAsync(key, value);
        return true; // Success response
    }
    catch (error) {
        console.log(error);
        return false;
    }

}

// Class is responsible for getting & updating the last used ids in order to get unique ones everytime.
export class LastUsedIdsManipulation {

    public static async getCustomerId() {
        try {
            const result = await SecureStore.getItemAsync(Constants.LASTUSEDIDS);
            if (result !== null) {
                const allKeys = JSON.parse(result);
                const currentKey = allKeys["customerId"];
                const newKey = parseInt(currentKey || "0") + 1;

                await SecureStore.setItemAsync(Constants.LASTUSEDIDS, JSON.stringify({customerId: newKey}));

                // For making the id formatted as C0001, C0002, etc
                // const formattedID = `C${newID.toString().padStart(4, '0')}`;    

                return currentKey;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}