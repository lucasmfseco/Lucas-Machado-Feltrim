programa
{
	funcao inicio()
	{
		inteiro numero, maior, menor
		logico primeiro = verdadeiro

		escreva("Digite números inteiros (digite 0 para parar):\n")
		escreva("Número: ")
		leia(numero)

		enquanto (numero != 0)
		{
			se (primeiro)
			{
				maior = numero
				menor = numero
				primeiro = falso
			}
			senao
			{
				se (numero > maior)
				{
					maior = numero
				}

				se (numero < menor)
				{
					menor = numero
				}
			}

			escreva("Número: ")
			leia(numero)
		}

		escreva("Maior número: ", maior, "\n")
		escreva("Menor número: ", menor, "\n")
	}
}
