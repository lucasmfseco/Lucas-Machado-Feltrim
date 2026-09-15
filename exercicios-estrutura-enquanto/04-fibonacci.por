// ============================================================
// Exercício 4 - Sequência de Fibonacci até um Limite
// ------------------------------------------------------------
// Objetivo: gerar e exibir os termos da sequência de Fibonacci
// (1, 1, 2, 3, 5, 8, 13, ...) que sejam menores ou iguais a um
// número N informado pelo usuário, trocando os valores das
// variáveis a cada iteração do laço "enquanto".
// ============================================================

programa
{
	funcao inicio()
	{
		// "n" é o limite máximo informado pelo usuário.
		// "termo_atual" guarda o termo da sequência que está sendo
		// exibido na iteração corrente.
		// "proximo_termo" guarda o termo seguinte da sequência.
		// "auxiliar" é usada para não perder o valor de "proximo_termo"
		// no momento de trocar os valores entre as variáveis.
		inteiro n, termo_atual, proximo_termo, auxiliar

		// Pede e lê o valor de N digitado pelo usuário.
		escreva("Digite um número inteiro positivo (limite N): ")
		leia(n)

		// Os dois primeiros termos da sequência de Fibonacci são
		// sempre 1 e 1, então inicializamos as variáveis com esses
		// valores antes de começar o laço.
		termo_atual = 1
		proximo_termo = 1

		escreva("Sequência de Fibonacci até ", n, ":\n")

		// Enquanto o termo atual não ultrapassar o limite N,
		// continuamos gerando e exibindo termos da sequência.
		enquanto (termo_atual <= n)
		{
			// Exibe o termo atual da sequência.
			escreva(termo_atual, " ")

			// Guarda em "auxiliar" a soma do termo atual com o
			// próximo termo: esse valor será o termo seguinte da
			// sequência (ex.: 1+1=2, 1+2=3, 2+3=5, ...).
			auxiliar = termo_atual + proximo_termo

			// O "próximo" termo passa a ser o "atual" na próxima
			// iteração, avançando a sequência uma posição.
			termo_atual = proximo_termo

			// O valor calculado em "auxiliar" passa a ser o novo
			// "próximo termo", completando a troca de valores.
			proximo_termo = auxiliar

		} // Fim do laço: para assim que termo_atual ultrapassar n.

		// Quebra de linha final, apenas para organizar a saída.
		escreva("\n")

	} // Fim da função inicio()
}
