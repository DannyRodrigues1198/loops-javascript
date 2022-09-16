let menosQue21 = 0;
let maisDe50 = 0;
let idade = 0;

while (idade != -99) {
    const textIdade = prompt ('digite sua idade: ');
    idade = Number (textIdade);

    if ( idade < 21 && idade != -99) {
        menosQue21++;
    }else if (idade > 50){
        maisDe50++;
    }

}

document.write (`Foram digitadas ${maisDe50} pessoas com mais de 50 anos!`);
document.write (`Foram digitadas ${menosQue21} pessoas com menos de 21`);
