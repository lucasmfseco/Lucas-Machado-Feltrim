// ============================================================
// Exercício 1 - Simulação de Crescimento Populacional
// ------------------------------------------------------------
// Objetivo: usar a estrutura de repetição "enquanto" para
// descobrir em quantos anos a população da Cidade A (que
// cresce mais rápido) ultrapassa a população da Cidade B.
// ============================================================

programa
{
	funcao inicio()
	{
		// Declara "pop_a" como número real (aceita casas decimais)
		// e já a inicializa com 80.000, a população inicial da Cidade A.
		real pop_a = 80000.0

		// Declara "pop_b" como número real e a inicializa com 200.000,
		// a população inicial da Cidade B.
		real pop_b = 200000.0

		// Declara "anos" como número inteiro, usado para contar
		// quantas vezes o laço se repete (ou seja, quantos anos
		// se passaram). Começa em 0 porque nenhum ano ainda passou.
		inteiro anos = 0

		// Início do laço "enquanto": a condição entre parênteses é
		// testada ANTES de cada repetição. Enquanto pop_a for menor
		// ou igual a pop_b, o bloco de código abaixo continua sendo
		// executado. Quando pop_a finalmente ficar MAIOR que pop_b,
		// a condição se torna falsa e o laço para.
		enquanto (pop_a <= pop_b)
		{
			// Recalcula a população da Cidade A: soma a população
			// atual com 3% dela mesma (pop_a * 0.03), simulando o
			// crescimento de um ano. O resultado substitui o valor
			// antigo de pop_a.
			pop_a = pop_a + (pop_a * 0.03) // Aumento de 3%

			// Recalcula a população da Cidade B da mesma forma, mas
			// usando a taxa de crescimento dela, 1,5% (0.015).
			// Importante: isso é feito com o valor de pop_a JÁ
			// atualizado acima, mas usando o pop_b antigo (a variável
			// pop_b só é sobrescrita aqui, então o cálculo está correto).
			pop_b = pop_b + (pop_b * 0.015) // Aumento de 1.5%

			// Incrementa o contador de anos em 1, pois acabamos de
			// simular a passagem de mais um ano completo.
			anos = anos + 1

		} // Fecha o bloco do laço "enquanto". Aqui o programa volta a
		  // testar a condição (pop_a <= pop_b) para decidir se repete
		  // o bloco de novo ou se segue em frente.

		// Depois que o laço termina (pop_a > pop_b), exibe quantos
		// anos foram necessários para isso acontecer.
		escreva("Serão necessários ", anos, " anos para a Cidade A ultrapassar a Cidade B.\n")

		// Exibe o valor final da população da Cidade A, já depois
		// do último ano simulado dentro do laço.
		escreva("População final de A: ", pop_a, "\n")

		// Exibe o valor final da população da Cidade B, para
		// comparação com a população final de A.
		escreva("População final de B: ", pop_b, "\n")

	} // Fecha a função inicio(), fim do programa.
}
