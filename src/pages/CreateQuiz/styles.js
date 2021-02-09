import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  margin: 10px 0;
  font-size: 24px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin: 10px 0px;
  font-size: 20px;
  width: 100%;
  border-width: 1px;
  border-color: #555;
  border-radius: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding-top: 10px;
`;

export const SaveButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  padding-left: 10px;
`;

// const styles = StyleSheet.create({
//   container: {},
//   texQuest: {
//     color: '#49104A',
//     fontSize: 22,
//     marginTop: 20,
//     textAlign: 'center',
//     fontFamily: 'Archivo_700Bold',
//   },
//   title: {
//     color: '#fff',
//     fontSize: 25,
//     fontFamily: 'Archivo_700Bold',
//     marginTop: 50,
//   },
//   inputContainer: {
//     flex: 1,
//     marginTop: 30,
//     width: '90%',
//     padding: 20,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     alignItems: 'stretch',
//     backgroundColor: '#fff',
//   },
//   textDate: {
//     color: '#676767',
//     fontSize: 14,
//     marginTop: 10,
//     fontFamily: 'Archivo_400Regular',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//   },
//   input: {
//     marginTop: 10,
//     height: 60,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//     fontSize: 16,
//     fontFamily: 'Archivo_400Regular',
//     alignItems: 'stretch',
//   },

//   inputDesc: {
//     marginTop: 10,
//     height: 60,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//     fontSize: 16,
//     alignItems: 'stretch',
//     fontFamily: 'Archivo_400Regular',
//   },

//   inputLoc: {
//     color: '#676767',
//     fontSize: 20,
//     marginTop: 20,
//     fontFamily: 'Archivo_400Regular',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//   },

//   inputCoord: {
//     color: '#676767',
//     fontSize: 13,
//     marginTop: 10,
//     fontFamily: 'Archivo_400Regular',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//   },

//   button: {
//     marginTop: 10,
//     height: 60,
//     backgroundColor: '#B819FF',
//     borderRadius: 10,
//     paddingHorizontal: 24,
//     fontSize: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 20,
//     shadowOpacity: 20,
//     shadowColor: '#ccc',
//   },
//   buttonText: {
//     color: '#fff',
//     fontFamily: 'Archivo_400Regular',
//   },

//   dateComponent: {
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     width: 280,
//     paddingHorizontal: 24,
//   },
// });
