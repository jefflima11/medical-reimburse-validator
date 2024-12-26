// provider-group-mapping.js
// Mapeia os prestadores para os grupos aos quais pertencem

const prestadorEGrupo = [
    { prestador: 245, group: 1 },
    { prestador: 388, group: 1 },
    { prestador: 230, group: 2 },
    { prestador: 772, group: 4 },
    // Adicione outros prestadores e seus grupos conforme necessário
];

// Função que mapeia um prestador para seu grupo
function mapProviderToGroup(prestadorId) {
    // Encontra o prestador e retorna o grupo correspondente
    const mapping = prestadorEGrupo.find(p => p.prestador === prestadorId);
    
    if (!mapping) {
        throw new Error(`Prestador com ID ${prestadorId} não encontrado.`);
    }
    
    return mapping.group;
}

// Função que retorna todos os prestadores de um determinado grupo
function getProvidersByGroup(groupId) {
    // Filtra os prestadores que pertencem ao grupo solicitado
    return prestadorEGrupo.filter(p => p.group === groupId).map(p => p.prestador);
}

module.exports = { mapProviderToGroup, getProvidersByGroup };
