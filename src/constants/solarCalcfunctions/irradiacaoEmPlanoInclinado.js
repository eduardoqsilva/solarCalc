function irradianceInclinedPlane(latitude, longitude, tiltAngle, orientation, month) {
    // conversão para radianos
    const latRad = latitude * Math.PI / 180;
    const tiltRad = tiltAngle * Math.PI / 180;
    const oriRad = orientation * Math.PI / 180;

    // cálculo da declinação solar em radianos
    const decSol = 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI / 365 * (284 + month));

    // cálculo da hora solar ao meio dia
    const hsolar = 12 - 4 * (longitude - oriRad) / Math.PI;

    // cálculo da altura solar em radianos
    const hsolarRad = (hsolar - 12) * Math.PI / 12;
    const altSolRad = Math.asin(Math.sin(latRad) * Math.sin(decSol) + Math.cos(latRad) * Math.cos(decSol) * Math.cos(hsolarRad));

    // cálculo da irradiância no plano inclinado
    const g0 = 1367; // irradiância no topo da atmosfera
    const beta = Math.abs(tiltRad - altSolRad);
    const cosTheta = Math.sin(latRad) * Math.sin(decSol) * Math.cos(beta) + Math.sin(latRad) * Math.cos(decSol) * Math.sin(beta) * Math.cos(oriRad) + Math.cos(latRad) * Math.cos(decSol) * Math.cos(hsolarRad - oriRad) * Math.cos(beta) + Math.cos(latRad) * Math.sin(decSol) * Math.sin(beta) * Math.cos(oriRad) * Math.cos(hsolarRad - oriRad) - Math.cos(latRad) * Math.sin(beta) * Math.sin(oriRad) * Math.sin(hsolarRad - oriRad);
    const irradiance = g0 * cosTheta;
    
    return irradiance;
}


const irradiance = irradianceInclinedPlane(-23.56, -43, 23, 90, 6); // retorna a irradiância em junho na cidade de São Paulo, em um plano inclinado de 30 graus de inclinação e orientação para o norte.
console.log(irradiance);
