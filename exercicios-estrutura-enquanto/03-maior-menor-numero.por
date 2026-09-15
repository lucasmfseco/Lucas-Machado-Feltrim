// ============================================================
// Exercício 3 - Leitor de Maior e Menor Número com Parada
// Específica
// ------------------------------------------------------------
// Objetivo: ler números inteiros continuamente até que o
// usuário digite 0 (que serve só como sinal de parada, não
// entra na comparação) e, ao final, mostrar o maior e o
// menor valor digitados.
// ============================================================

programa
{
	funcao inicio()
	{
		// "numero" guarda o valor lido a cada rodada do laço.
		// "maior" e "menor" guardam, respectivamente, o maior e o
		// menor número já vistos até o momento.
		inteiro numero, maior, menor

		// "primeiro" indica se ainda não lemos nenhum número válido.
		// É necessário porque, antes da primeira leitura, não temos
		// nenhuma referência de "maior" ou "menor" para comparar.
		logico primeiro = verdadeiro

		// Lê o primeiro número digitado pelo usuário, fora do laço,
		// para que o "enquanto" já possa testar a condição de parada
		// (numero != 0) antes de decidir se processa esse valor.
		escreva("Digite números inteiros (digite 0 para parar): \n")
		escreva("Número: ")
		leia(numero)

		// Enquanto o número digitado for diferente de 0, continuamos
		// processando. Assim que o usuário digitar 0, a condição vira
		// falsa e o laço termina sem considerar o 0 nos cálculos.
		enquanto (numero != 0)
		{
			// Se esta for a primeira leitura válida, tanto "maior"
			// quanto "menor" começam iguais a esse primeiro número,
			// pois ainda não há nada para comparar.
			se (primeiro)
			{
				maior = numero
				menor = numero
				primeiro = falso // A partir daqui já temos referência.
			}
			senao
			{
				// Se o número atual for maior que o maior já visto,
				// atualiza "maior" com esse novo valor.
				se (numero > maior)
				{
					maior = numero
				}

				// Se o número atual for menor que o menor já visto,
				// atualiza "menor" com esse novo valor.
				se (numero < menor)
				{
					menor = numero
				}
			}

			// Lê o próximo número digitado pelo usuário. Essa leitura
			// no final do bloco é o que permite ao laço "enquanto"
			// reavaliar a condição com um valor novo a cada repetição.
			escreva("Número: ")
			leia(numero)

		} // Fim do laço: para quando numero for igual a 0.

		// Exibe o maior número digitado (sem contar o 0 final).
		escreva("Maior número: ", maior, "\n")

		// Exibe o menor número digitado (sem contar o 0 final).
		escreva("Menor número: ", menor, "\n")

	} // Fim da função inicio()
}
