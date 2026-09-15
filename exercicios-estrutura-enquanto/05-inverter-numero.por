// ============================================================
// Exercício 5 - Inversão de um Número Inteiro
// ------------------------------------------------------------
// Objetivo: inverter os dígitos de um número inteiro positivo
// (ex.: 1234 -> 4321) usando resto da divisão (%) para extrair
// dígitos e divisão inteira (/) para "descascar" o número
// original dentro de um laço "enquanto".
// ============================================================

programa
{
	funcao inicio()
	{
		// "numero" guarda o número original digitado pelo usuário e
		// vai sendo reduzido a cada iteração do laço.
		// "invertido" guarda o número sendo construído com os
		// dígitos na ordem inversa.
		// "digito" guarda, a cada rodada, o último dígito extraído
		// de "numero".
		inteiro numero, invertido, digito

		// Pede e lê o número original digitado pelo usuário.
		escreva("Digite um número inteiro positivo: ")
		leia(numero)

		// "invertido" começa em 0, pois ainda não construímos nenhum
		// dígito do número invertido.
		invertido = 0

		// Enquanto ainda restarem dígitos em "numero" (ou seja,
		// enquanto ele for maior que 0), continuamos extraindo
		// dígitos e montando o número invertido.
		enquanto (numero > 0)
		{
			// O resto da divisão de "numero" por 10 sempre retorna o
			// último dígito do número (ex.: 1234 % 10 = 4).
			digito = numero % 10

			// Desloca uma casa decimal para a esquerda o número
			// invertido que já temos (multiplicando por 10) e soma o
			// novo dígito extraído na posição das unidades. É assim
			// que os dígitos vão se acumulando na ordem inversa.
			invertido = (invertido * 10) + digito

			// A divisão inteira por 10 "descarta" o último dígito de
			// "numero" (ex.: 1234 / 10 = 123), preparando a próxima
			// extração de dígito na iteração seguinte.
			numero = numero / 10

		} // Fim do laço: para quando não houver mais dígitos (numero == 0).

		// Exibe o número já com os dígitos invertidos.
		escreva("Número invertido: ", invertido, "\n")

	} // Fim da função inicio()
}
