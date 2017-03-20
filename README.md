# electrik-scheme

Takes as an argument scheme that look like this, and turn it into graphic and output position. 



scheme = {
        name: 'gate',
        type: 'XOR',

        children: [
        {
            name: 'gate',
            type: 'NOT',
            children: [
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }, {
            name: 'gate',
            type: 'OR',
            children: [
            {
                name: 'gate',
                type: 'OR',
                children: [
                {
                    name: 'switch',
                    type: 'OFF',
                    state: 0
                },
                {
                    name: 'gate',
                    type: 'AND',
                    children: [
                    {
                        name: 'switch',
                        type: 'OFF',
                        state: 0
                    },
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    }
                    ]
                }
                ]
            },
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }
        ]
    };
    
    
    
