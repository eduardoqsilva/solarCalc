function calcularAnguloSolar(latitude, inclinacao, mes, dia) {
    // Converter latitude de graus para radianos
    const latRad = latitude * (Math.PI / 180);
  
    // Calcular a declinação solar para o dia e mês dados
    const declinacaoSolar = -23.45 * Math.cos((360 / 365) * (mes + 10)) * (Math.PI / 180);
  
    // Calcular o ângulo horário do nascer do sol
    const horarioNascerSol = 12 - (1 / 15) * Math.acos(
      -Math.tan(latRad) * Math.tan(declinacaoSolar)
    ) * (180 / Math.PI);
  
    // Calcular o ângulo horário do pôr do sol
    const horarioPorSol = 12 + (1 / 15) * Math.acos(
      -Math.tan(latRad) * Math.tan(declinacaoSolar)
    ) * (180 / Math.PI);
  
    // Calcular o ângulo solar para o horário do nascer do sol
    const anguloNascerSol = Math.asin(
      Math.cos(latRad) * Math.cos(declinacaoSolar) * Math.cos((15 * (horarioNascerSol - 12)) * (Math.PI / 180)) +
      Math.sin(latRad) * Math.sin(declinacaoSolar)
    ) * (180 / Math.PI);
  
    // Calcular o ângulo solar para o horário do pôr do sol
    const anguloPorSol = Math.asin(
      Math.cos(latRad) * Math.cos(declinacaoSolar) * Math.cos((15 * (horarioPorSol - 12)) * (Math.PI / 180)) +
      Math.sin(latRad) * Math.sin(declinacaoSolar)
    ) * (180 / Math.PI);
  
    // Calcular o ângulo solar médio para o dia dado
    const anguloSolarMedio = (anguloNascerSol + anguloPorSol) / 2;
  
    // Calcular o ângulo de incidência solar na superfície inclinada
    const anguloIncidencia = Math.acos(
      Math.cos(anguloSolarMedio * (Math.PI / 180)) * Math.cos(inclinacao * (Math.PI / 180)) +
      Math.sin(anguloSolarMedio * (Math.PI / 180)) * Math.sin(inclinacao * (Math.PI / 180))
    ) * (180 / Math.PI);
  
    return anguloIncidencia;
    
  }


  calcularAnguloSolar(-23.5505, 30, 4, 15, 14); // retorna 44.68362058246434
