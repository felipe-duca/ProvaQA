const locators = {
    LOGIN: {
        INPUT_EMAIL: 'vrc-input.inputMail',
        INPUT_SENHA: 'vrc-input.inputSenha',
        BTN_ENTRAR: '.btn__login'
    },
    BARRA_BUSCA: 'vrc-autocomplete',
    OPERACAO: {
        CADASTRO: {
            TIPO_MOVIMENTACAO: {
                SELECT_ITEM: item => `div.select2-label-content:contains('${item}')`,

                CONSULTA_BTN_CADASTRAR: 'vr-nav-button-add',
                CONSULTA_INPUT_CODIGO: '#id',
                CONSULTA_DATATABLE_ROW: conteudo => `datatable-body-row:contains('${conteudo}')`,
                CONSULTA_DATATABLE_CHECKBOX: '.checkbox__label',

                CADASTRO_BTN_SALVAR: 'vr-nav-button-save button',
                CADASTRO_BTN_VOLTAR: 'vr-nav-button-back',

                CADASTRO_INPUT_DESCRICAO: '[formcontrolname="descricao"] input',
                CADASTRO_SELECT_TIPO_PRECO: '[formcontrolname="tipoPreco"] .select2',
                CADASTRO_SELECT_NATUREZA: '[formcontrolname="natureza"] .select2',
                CADASTRO_INPUT_CODIGO_TIPO_MOVIMENTACAO: '[formcontrolname="id"] input',
            }
        }
    }
}

export default locators;