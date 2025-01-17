import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    oval: {
        backgroundColor: '#fb7500',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90
    },
    capa: {
        height: 85,
        width: 85,
        borderRadius: 85
    },
    logo: {
        width: 90,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        alignSelf: 'center'
    },
    gradient:{
        width: '100%',
        height: 80,
        position: 'absolute',
        zIndex: 9,
        bottom: 0
    }
})

export default styles