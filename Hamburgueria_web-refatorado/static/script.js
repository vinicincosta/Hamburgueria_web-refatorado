/**
 * script.js — Royal Burger · Scripts globais
 *
 * Funções globais usadas em todas as páginas:
 *   - openNav / closeNav: controla a nav lateral
 *   - apareceInsumo / apareceBebida: exibe/oculta campos
 *     nos formulários de cadastro de entradas
 */

/**
 * Abre a navegação lateral expandindo sua largura para 100vw.
 * Chamado pelo botão hambúrguer no header.
 */
function openNav() {
  document.getElementById('nav').style.width = '260px';
}

/**
 * Fecha a navegação lateral colapsando para 0.
 * Chamado pelo botão "X" dentro da nav.
 */
function closeNav() {
  document.getElementById('nav').style.width = '0';
}

/**
 * Exibe o campo de insumo e oculta o de bebida.
 * Usado no formulário de cadastro de entradas
 * quando o radio "Insumo" é selecionado.
 */
function apareceInsumo() {
  const insumoLabel = document.getElementById('insumoLabel');
  const bebidaLabel = document.getElementById('bebidaLabel');
  if (insumoLabel) insumoLabel.style.display = 'block';
  if (bebidaLabel) bebidaLabel.style.display = 'none';
}

/**
 * Exibe o campo de bebida e oculta o de insumo.
 * Usado no formulário de cadastro de entradas
 * quando o radio "Bebida" é selecionado.
 */
function apareceBebida() {
  const insumoLabel = document.getElementById('insumoLabel');
  const bebidaLabel = document.getElementById('bebidaLabel');
  if (insumoLabel) insumoLabel.style.display = 'none';
  if (bebidaLabel) bebidaLabel.style.display = 'block';
}
