import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Moviments from '../../components/Moviments';

const list = [
    {
        id: 1,
        label: 'Restaurante Chaplin',
        value: '205,06',
        date: '16/11/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'PIX Cláudia Júnior Moraes',
        value: '500,00',
        date: '13/11/2022',
        type: 1 //entradas
    },
    {
        id: 3,
        label: 'PIX Antônio Paulinho',
        value: '300,00',
        date: '10/11/2022',
        type: 1 //entradas
    }
]

export default function Home() {
    return (
        <View style={styles.container}>

            <Header name="Dora Alice" />

            <Balance saldo="2.410,03" gastos="574,96" />

            <Actions />

            <Text style={styles.title}>Últimas Movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                //cada item vai ter um ID, mas também vai ser uma string:
                keyExtractor={(item) => String(item.id)}
                //pra não ter barrinha de rolagem:
                showsVerticalScrollIndicator={false}
                //vai passar em cada item e renderizar:
                renderItem={({ item }) => <Moviments data={item} />} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F0',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 18,
        color: '#A020F0'
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
