
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';
import { LOGO } from '../../../assets/images';

const LoginView = (props) => {
  function showError() {
    return props.error
      ? props.error
      : '';
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginFormContainer}>

        <View style={styles.logoContainer}>
          <Image source={LOGO} resizeMode="contain" style={{ width: 160, height: 50 }} />
          {/* <Text>Daily</Text> */}
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={styles.inputContainer}>
            <Input
              name="email"
              labelText="email"
              email={true}
              placeholder="Email"
              onChangeText={email => props.onTextChange(email, 'email')}
              onSubmitHandler={props.onLogin}
            />
          </View>
          <View>
            <Input 
              name="password"
              labelText="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => props.onTextChange(password, 'password')}
              onSubmitHandler={props.onLogin}
            />
          </View> 
        </View>

        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {showError()}
          </Text>
        </View>

        <View>
          <TouchableOpacity  
            style={styles.button}
            onPress={props.onLogin}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
          {/* <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Text>or</Text>
          </View>
          {facebookOrSpinner()} */}
          <View style={styles.goRegister}>
            <Text>
              New to Paradyse? 
            </Text>
            <TouchableOpacity onPress={props.goRegister}>
              <Text style={styles.signupText}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.tcContainer} onPress={() => props.navigate('Legal')}>
          <Text style={styles.tcText}>By signing up or logging in you agree to our 
            <Text style={styles.tcText2}> terms and conditions </Text>
            <Text style={styles.tcText}>and </Text>
            <Text style={styles.tcText2}>privacy policy.</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default LoginView;
