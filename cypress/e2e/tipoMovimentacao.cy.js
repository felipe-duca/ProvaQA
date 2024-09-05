/// <reference types="cypress" />

import LOC from '../support/locators'

describe('Tipo Movimentacao', () => {
    beforeEach(() => {
        cy.login('felipe.duca@vrsoft.com.br', 'Felipe!03')
        cy.viewport(1280, 800)
    })

    it('Cadastro Tipo Movimentacao', () => {
        cy.buscaTela('Tipo de Movimentacao')

        //Acessando Tela de cadastro do Tipo Movimentacao
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CONSULTA_BTN_CADASTRAR).click()

        //Cadastro do Tipo Movimentacao
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_INPUT_DESCRICAO).type('Teste QA Felipe Duca')
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_SELECT_TIPO_PRECO).click()
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.SELECT_ITEM('Custo de Compra')).click()
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_SELECT_NATUREZA).click()
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.SELECT_ITEM('Entrada')).click()
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_BTN_SALVAR).click()
        cy.validaRetorno('Salvo com sucesso!')

        cy.aguardaCarregar()

        //Coletando codigo do Tipo Movimentacao para validar se foi cadastrado
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_INPUT_CODIGO_TIPO_MOVIMENTACAO).invoke('val').then(num => {
            return num
        }).as('codigoTipoMovimentacao')

        //Retornando a tela de consulta
        cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CADASTRO_BTN_VOLTAR).click()

        cy.aguardaCarregar()
        
        //Consultando existência do registro
        cy.get('@codigoTipoMovimentacao').then(codigoTipoMovimentacao => {
            cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CONSULTA_INPUT_CODIGO).type(codigoTipoMovimentacao + '{ENTER}')
            cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CONSULTA_DATATABLE_ROW('Teste QA Felipe Duca')).should('exist')
        })

        //Estava iniciando o processo de inativação do registro
        cy.get('@codigoTipoMovimentacao').then(codigoTipoMovimentacao => {
            cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CONSULTA_DATATABLE_ROW(codigoTipoMovimentacao)).within(() => {
                cy.get(LOC.OPERACAO.CADASTRO.TIPO_MOVIMENTACAO.CONSULTA_DATATABLE_CHECKBOX).click()
            })
        })
    })
})