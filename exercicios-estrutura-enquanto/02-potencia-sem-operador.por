programa
{
	funcao inicio()
	{
		inteiro base, expoente, resultado, contador

		escreva("Digite a base (inteiro positivo): ")
		leia(base)

		escreva("Digite o expoente (inteiro positivo): ")
		leia(expoente)

		resultado = 1
		contador = 0

		enquanto (contador < expoente)
		{
			resultado = resultado * base
			contador = contador + 1
		}

		escreva(base, "^", expoente, " = ", resultado, "\n")
	}
}
