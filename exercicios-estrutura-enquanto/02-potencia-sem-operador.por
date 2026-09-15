// ============================================================
// Exercício 2 - Cálculo de Potência sem Usar Operador de
// Exponenciação
// ------------------------------------------------------------
// Objetivo: calcular base^expoente fazendo multiplicações
// sucessivas dentro de um laço "enquanto", sem usar nenhuma
// função ou operador pronto de potência.
// ============================================================

programa
{
	funcao inicio()
	{
		// Declara as variáveis inteiras que vamos usar:
		// base      -> o número que será multiplicado por ele mesmo
		// expoente  -> quantas vezes a base deve ser multiplicada
		// resultado -> vai guardar o valor da potência sendo montado
		// contador  -> conta quantas multiplicações já foram feitas
		inteiro base, expoente, resultado, contador

		// Pede e lê a base digitada pelo usuário.
		escreva("Digite a base (inteiro positivo): ")
		leia(base)

		// Pede e lê o expoente digitado pelo usuário.
		escreva("Digite o expoente (inteiro positivo): ")
		leia(expoente)

		// "resultado" começa em 1, o elemento neutro da multiplicação.
		// Assim, multiplicar por base repetidamente constrói a potência
		// corretamente (inclusive quando expoente for 0, resultado
		// permanece 1, que é a definição matemática de base^0).
		resultado = 1

		// "contador" começa em 0, pois ainda nenhuma multiplicação
		// foi realizada.
		contador = 0

		// Enquanto o contador for menor que o expoente, continuamos
		// multiplicando. O laço roda exatamente "expoente" vezes.
		enquanto (contador < expoente)
		{
			// Multiplica o resultado atual pela base e guarda de volta
			// em "resultado" (equivale a resultado *= base).
			resultado = resultado * base

			// Incrementa o contador para registrar que mais uma
			// multiplicação foi concluída.
			contador = contador + 1

		} // Fim do laço: quando contador chegar a expoente, a
		  // condição (contador < expoente) fica falsa e o laço para.

		// Exibe o resultado final da potência calculada.
		escreva(base, "^", expoente, " = ", resultado, "\n")

	} // Fim da função inicio()
}
