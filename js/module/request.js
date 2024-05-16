// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getOrderStatuses  = async () => {
    try {
        let res = await fetch("http://localhost:5508/requests");
        let data = await res.json();
        
        // Extraer estados únicos de los pedidos
        let states = data.reduce((uniqueStates, request) => {
            if (!uniqueStates.includes(request.status)) {
                uniqueStates.push(request.status);
            }
            return uniqueStates;
        }, []);

        return states;
    } catch (error) {
        console.error("Error al obtener estados de pedidos:", error);
        return [];
    }
};