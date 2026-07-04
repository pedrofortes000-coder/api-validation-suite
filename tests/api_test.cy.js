// Teste de validação de API de exemplo
describe('Validação de API - Cadastro de Vagas', () => {
    it('Deve criar uma vaga com sucesso - Status 201', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts', // API pública de teste
            body: {
                title: 'Analista de QA',
                body: 'Vaga para time de tecnologia',
                userId: 1,
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.title).to.eq('Analista de QA');
        });
    });
});
