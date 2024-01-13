import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";


const StudentForm = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const navigation = useNavigation();

  const handleSaveStudent = () => {
    axios.post("https://reactnativeservice.onrender.com/api.php", {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => {
        console.log(response.data);
        navigation.navigate("Listar");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>Cédula:</Text>
      <TextInput style={styles.input} value={cedula} onChangeText={text => setCedula(text)} />

      <Text style={styles.itemName}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={text => setNombre(text)} />

      <Text style={styles.itemName}>Apellido:</Text>
      <TextInput style={styles.input} value={apellido} onChangeText={text => setApellido(text)} />

      <Text style={styles.itemName}>Dirección:</Text>
      <TextInput style={styles.input} value={direccion} onChangeText={text => setDireccion(text)} />

      <Text style={styles.itemName}>Teléfono:</Text>
      <TextInput style={styles.input} value={telefono} onChangeText={text => setTelefono(text)} />

      <Pressable style={styles.button} title="Guardar Estudiante" onPress={handleSaveStudent}>
        <Text style={{ color: "#f0f0f0" }}>Crear</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "red",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "column",
    padding: 10,
  },
  button: {
    color: '#f0f0f0',
    alignSelf: 'center',
    alignItems: 'center',
    width: 90, // Establece un ancho mínimo inicial
    borderRadius: 15,
    backgroundColor: '#164220',
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
  }, input: {
    height: 40,
    width: 270,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: "#0C0C0C",
    color: '#0C0C0C',
    textAlign: 'center',
    fontSize: 18,
  }, itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default StudentForm;