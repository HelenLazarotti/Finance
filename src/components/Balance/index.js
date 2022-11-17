import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>

                <View style={styles.content}>
                    <Text style={styles.currency}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>

                <View style={styles.content}>
                    <Text style={styles.currency}>R$</Text>
                    <Text style={styles.expenses}>-{gastos}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    item: {

    },
    itemTitle: {
        fontSize: 20,
        color: '#706F6F'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currency: {
        color: '#1C1C1C',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#008000'
    },
    expenses: {
        fontSize: 22,
        color: '#FF0000'
    }
})
