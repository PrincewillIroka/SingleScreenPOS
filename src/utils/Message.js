import Toast from 'react-native-simple-toast';


const showMessage = () => {
    Toast.show(
        'button clicked',
        Toast.SHORT
    )
}

export default showMessage