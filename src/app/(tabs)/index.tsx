import { Image, StyleSheet, Platform, Button, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';

const { width: screenWidth } = Dimensions.get('window')
const imageSource = require('../../assets/images/ground-decoration.png')

const getImageDimensions = (source) => {
  if (Platform.OS === 'web') {
    const { width, height } = Dimensions.get('window')
    return { width, height }
  } else {
    const { width, height } = Image.resolveAssetSource(source)
    return { width, height }
  }
}

// Completar la sesión de autenticación si fue iniciada en el navegador.
WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "25566435978-7lsuvhk9qkdd121sfdi66i2tbvkbhdsu.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      handleAuthSuccess(response.authentication.accessToken);
    }
  }, [response]);

  async function handleAuthSuccess(token: string) {
    try {
      // Guardar el token en AsyncStorage si deseas persistir la sesión
      await AsyncStorage.setItem("userToken", token);
      console.warn("token = " + token);
      // Aquí puedes agregar cualquier lógica adicional, como obtener datos de usuario, etc.
    } catch (error) {
      console.error("Error al guardar el token", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>EcoScan</Text>
        <View style={styles.contentCard}>
          <Text style={styles.subtitle}>Inicia sesión</Text>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={handleEmailChange}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Contraseña'}
              secureTextEntry={!isPasswordVisible}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={togglePasswordVisibility}
              testID="toggle-password-visibility"
            >
              <Ionicons
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSignIn}
          >
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonsContainer}>
            <View>
              <Icon
                name='google'
                type='font-awesome'
                color='#DB4437'
                reverse
                onPress={() => {
                  promptAsync()
                }}
              />
            </View>
            <View>
              <Icon
                name='facebook'
                type='font-awesome'
                color='#3b5998'
                reverse
                onPress={() => console.log('Facebook Login')}
              />
            </View>
          </View>
          <Text style={styles.registerText}>
            ¿Aún no tienes una cuenta?{' '}
          </Text>
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            Regístrate aquí
          </Text>
        </View>
      </View>
      <Image
        source={imageSource}
        style={styles.image}
      />
    </View>
  );
}

const { width, height } = getImageDimensions(imageSource)

// Estilos comunes
const commonShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
}

const commonText = {
  fontWeight: 'bold',
  color: '#000',
}

const commonContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 15,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 0.7,
    ...commonContainer,
    padding: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 60,
    ...commonText,
    color: '#2E7D32',
    marginBottom: 20,
  },
  contentCard: {
    ...commonContainer,
    paddingVertical: 20,
    paddingHorizontal: 20,
    ...commonShadow,
    gap: 5,
  },
  subtitle: {
    fontSize: 24,
    ...commonText,
    marginBottom: 10,
  },
  inputContainer: {
    width: screenWidth * 0.75,
    height: 40,
  },
  input: {
    ...commonContainer,
    width: screenWidth * 0.75,
    height: 40,
    borderColor: '#2E7D32',
    borderBottomWidth: 2,
    paddingLeft: 10,
    marginBottom: 15,
  },
  iconContainer: {
    padding: 10,
    position: 'absolute',
    left: screenWidth * 0.6,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    ...commonShadow,
  },
  loginButtonText: {
    fontSize: 18,
    ...commonText,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  registerLink: {
    color: '#2E7D32',
    textDecorationLine: 'underline',
  },
  image: {
    position: 'absolute',
    bottom: -height / 6 - 50,
    width: screenWidth,
    height: (screenWidth * height) / width,
    zIndex: 0,
  },
})
