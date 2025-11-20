
import { Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';

import styles from '../Styles/styles';
import { useAppFonts } from '../Styles/styles';

import { PlusButton } from './Components/PlusButton';
import { CustomerCard } from './Components/CustomerCards';

import { CustomerManipulation } from '../Database/databaseSetup';
import { FlatList } from 'react-native-gesture-handler';

import { Customer } from '../LogicControllers/CustomerClass';
import { Screens } from '../LogicControllers/SystemConstants';

export function CustomerPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [allCustomers, setAllCustomers] = useState<Customer[]>([]);


    const fontsLoaded = useAppFonts();

    // Rendering all of the customers from the allCustomers list to the flat list
    const renderCustomerCards = ({item}: {item: Customer}) => {
        return (
            <CustomerCard
                id={item.getId()}
                name={item.getName()}
                phone={item.getPhone()}
                address={item.getAddress()}
                email={item.getEmail()}
            />
        )

    }

    useEffect(() => {
        // Fetching all of the customers from the database &
        // Creating an object Customer for each customer &
        // storing them in the allCustomers list
        async function fetchCustomers() {

            let customersList = await CustomerManipulation.getCustomers();
            let bufferCustomerList: Customer[] = [];
            customersList = Object.values(customersList); // Converting from JSON to an array
            for (let index = 0; index < customersList.length; index++) {
                const currentCustomer = customersList[index];
                const customerData = new Customer(currentCustomer.id, currentCustomer.name, currentCustomer.phone, currentCustomer.address, currentCustomer.email);
                bufferCustomerList.push(customerData);
            }
            setAllCustomers(bufferCustomerList);
            setIsLoading(false);

        }

        fetchCustomers();
    }, [isLoading]);


    return (
        <ScrollView style={styles.scrollViewProps}> 
            <View style={styles.container}> 
                <PlusButton text="New Customer" routingScreen={Screens.CREATECUSTOMERPAGE}/>
                <View style={styles.mainContainer}>
                    <FlatList
                        data={allCustomers}
                        renderItem={renderCustomerCards}
                        scrollEnabled={false} // To prevent the conflict between FlatList & ScrollView
                    />
                </View>
            </View>

        </ScrollView>
    )
}
