   let qtsSaoPares = 0
   let qtsSaoImpares = 0
   
   
   for (let i = 0; i < 10; i++) {

    const NumString = prompt ('insira um número: ')
    const Num = Number (NumString)

    if (Num % 2 == 0) {
        qtsSaoPares++

    } else {
        qtsSaoImpares++
    }
    
  }

  document.write (`Os numeros pares inseridos são:`, qtsSaoPares)

  document.write (`Os numeros impares inseridos são:`, qtsSaoImpares)