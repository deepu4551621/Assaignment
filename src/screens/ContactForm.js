import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, } from 'react-native';
const ContactForm = () => {
    const [form, setForm] = useState({
        email: '',
        dob: {
            date:1,
            month:1,
            year:1
        },
        password: ''
    });
    const [open, setOpen] = useState(false)
    const validateEmail = (email) => {
        // Simple email validation regex
        return /\S+@\S+\.\S+/.test(email);
    };
    const validateDOB = () => {
        const { date, month, year } = form.dob;
           
        // Check for empty fields
        if (!date || !month || !year) {
          alert('Please enter all date components (day, month, year)');
          return false;
        }
    if(date>31||date<=0){
        alert('Please enter valid date');
        return false;
    }
    if(month>12||date<=0){
        alert('Please enter valid month');
        return false;
    }
        // Validate date (month has 1-based indexing)
        const parsedMonth = parseInt(month, 10);
        if (parsedMonth < 1 || parsedMonth > 12) {
          alert('Invalid month. Please enter a value between 1 and 12.');
          return false;
        }
    
        const daysInMonth = new Date(year, parsedMonth, 0).getDate(); // Get days in the month
        if (date < 1 || date > daysInMonth) {
          alert(`Invalid day. Please enter a value between 1 and ${daysInMonth} for the chosen month.`);
          return false;
        }

        return true; // All checks passed
      };
      const handleDOBChange = (value, field) => {
    setForm({
      ...form,
      dob: {
        ...form.dob,
        [field]: value, 
      },
    });
      };
    
    const onSubmit = () => {
        if (!validateEmail(form.email)) {
            alert('Please enter a valid email');
            return;
        }
        if (!validateDOB()) {
            return; 
          }
        if (form.password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        //
        console.log(form); 
        alert('Form Submitted!');
    };

    return (
       <ScrollView>
         <View style={styles.container}>
            <Text style={styles.title}>Contact Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
            />
          <View style={styles.containerDOB}>
          <TextInput
            style={styles.inputDOB}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            
            value={form.dob.date}
            onChangeText={(text) => handleDOBChange(text, 'date')}
          />
          <TextInput
            style={styles.inputDOB}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            value={form.dob.month}
            onChangeText={(text) => handleDOBChange(text, 'month')}
          />
          <TextInput
            style={styles.inputDOB}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            value={form.dob.year}
            onChangeText={(text) => handleDOBChange(text, 'year')}
          />
        </View>
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
            />
            <Button title="Submit" onPress={onSubmit} />
        </View>
       </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    containerDOB: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%', 
      },
      inputDOB: {
        flex: 1,
        height: 40, 
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
});

export default ContactForm;
