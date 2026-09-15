programa
{
	funcao inicio()
	{
		inteiro n, atual, proximo, auxiliar

		escreva("Digite um número inteiro positivo (limite N): ")
		leia(n)

		atual = 1
		proximo = 1

		escreva("Sequência de Fibonacci até ", n, ":\n")

		enquanto (atual <= n)
		{
			escreva(atual, " ")
			auxiliar = atual + proximo
			atual = proximo
			proximo = auxiliar
		}

		escreva("\n")
	}
}
