programa
{
	funcao inicio()
	{
		inteiro numero, invertido, digito

		escreva("Digite um número inteiro positivo: ")
		leia(numero)

		invertido = 0

		enquanto (numero > 0)
		{
			digito = numero % 10
			invertido = (invertido * 10) + digito
			numero = numero / 10
		}

		escreva("Número invertido: ", invertido, "\n")
	}
}
