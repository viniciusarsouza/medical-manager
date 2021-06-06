import React from 'react';

import { Container, Content, ContentTable } from './styles';

const ManageDoctors: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <form>
                        <h1>Adicionar novo médico</h1>
                        <input placeholder="Nome" />
                        <input placeholder="CRM" />
                        <input placeholder="CEP" />
                        <input placeholder="Primeira especialização" />
                        <input placeholder="Segunda especialização" />

                        <button type="submit">Adicionar</button>
                    </form>
                </Content>
                <ContentTable>
                    <h1>Hello</h1>
                </ContentTable>
            </Container>
        </>
    );
};

export default ManageDoctors;
