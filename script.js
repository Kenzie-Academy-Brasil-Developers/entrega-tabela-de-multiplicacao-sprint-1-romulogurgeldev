//função constrói uma tabela de multiplicação no console.
function multiplicationTable(n) {
                let nlin = [];
                for (let i = 0; i <= n; i++) {
                    nlin[i] = [];
                   for ( let y = 0; y <= n; y++){
                        nlin[i].push(i * y); // multiplicação dos valores vindos de i e y, sendo agregados em nlin.
                    }
                }
                console.table(nlin);
            }