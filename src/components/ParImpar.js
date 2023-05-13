import react from 'react';
import { View, Text } from 'react-native';
import Padrao from '../styles/Padrao';
import If from './If';

function parOuImpar(num){
    const texto = num % 2 == 0 ? 'Par' : 'Impar';
    return <Text style={Padrao.ex}>{texto}</Text>
}

export default (props) => { 

    return <View>
        <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
    </View>

    // return <View>
    //     {parOuImpar(props.numero)}
    // </View>
}