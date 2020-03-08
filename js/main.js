window.onload = function() {

  Vue.component('table-row',{
    props: ['sell', 'ancestorName'],
    template: `
    <div>
      <tr>
        <td>
          <span v-if="ancestorName">
            {{ancestorName}}
          </span>
          <b>{{sell.name}}</b>
        </td>
        <td>{{sell.newSells}}</td>
        <td>{{sell.preownedSells}}</td>
        <td>{{sell.financing}}</td>
        <td>{{sell.hybrid}}</td>
        <td>{{sell.gasoline}}</td>
        <td>{{sell.newSells}}</td>
        <td>{{sell.preownedSells}}</td>
        <td>{{sell.financing}}</td>
        <td>{{sell.hybrid}}</td>
        <td>{{sell.gasoline}}</td>
        <td>{{sell.newSells}}</td>
        <td>{{sell.preownedSells}}</td>
        <td>{{sell.financing}}</td>
        <td>{{sell.hybrid}}</td>
        <td>{{sell.gasoline}}</td>
        <td>{{sell.newSells}}</td>
        <td>{{sell.preownedSells}}</td>
        <td>{{sell.financing}}</td>
        <td>{{sell.hybrid}}</td>
        <td>{{sell.gasoline}}</td>
      </tr>
      <template v-if="sell.dealers && sell.dealers.length">
        <table-row 
          v-for="dealer in sell.dealers"
          :sell="dealer"
          :ancestorName="ancestorName + sell.name + '>>'"
        >
        </table-row>
      </template>
    </div>
    `
  })

    new Vue({
        el: '#app',
        data: {
          sells: [
            {
              name: 'SEAT',
              newSells: 1200,
              preownedSells: 420,
              financing: 750,
              hybrid: 350,
              gasoline: 1250,
              dealers: [
                {
                  name: 'Valencia',
                  newSells: 1200,
                  preownedSells: 420,
                  financing: 750,
                  hybrid: 350,
                  gasoline: 1250,
                  dealers: [
                    {
                      name: 'Alicante',
                      newSells: 1200,
                      preownedSells: 420,
                      financing: 750,
                      hybrid: 350,
                      gasoline: 1250,
                      dealers: [
                        {
                          name: 'Sebastián Gutierrez',
                          newSells: 20,
                          preownedSells: 23,
                          financing: 35,
                          hybrid: 3,
                          gasoline: 40,
                        },
                        {
                          name: 'Martín Sanz',
                          newSells: 15,
                          preownedSells: 35,
                          financing: 42,
                          hybrid: 12,
                          gasoline: 38,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        },
                        {
                          name: 'Lara Perez',
                          newSells: 32,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        }
                      ]
                    },
                    {
                      name: 'Valencia',
                      newSells: 1200,
                      preownedSells: 420,
                      financing: 750,
                      hybrid: 350,
                      gasoline: 1250,
                      dealers: [
                        {
                          name: 'Sebastián Gutierrez',
                          newSells: 20,
                          preownedSells: 23,
                          financing: 35,
                          hybrid: 3,
                          gasoline: 40,
                        },
                        {
                          name: 'Martín Sanz',
                          newSells: 15,
                          preownedSells: 35,
                          financing: 42,
                          hybrid: 12,
                          gasoline: 38,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        },
                        {
                          name: 'Lara Perez',
                          newSells: 32,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        }
                      ]
                    },
                    {
                      name: 'Castellón de la plana',
                      newSells: 1200,
                      preownedSells: 420,
                      financing: 750,
                      hybrid: 350,
                      gasoline: 1250,
                      dealers: [
                        {
                          name: 'Sebastián Gutierrez',
                          newSells: 20,
                          preownedSells: 23,
                          financing: 35,
                          hybrid: 3,
                          gasoline: 40,
                        },
                        {
                          name: 'Martín Sanz',
                          newSells: 15,
                          preownedSells: 35,
                          financing: 42,
                          hybrid: 12,
                          gasoline: 38,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        },
                        {
                          name: 'Lara Perez',
                          newSells: 32,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        }
                      ]
                    },
                  ]
                },
                {
                  name: 'Madrid',
                  newSells: 1200,
                  preownedSells: 420,
                  financing: 750,
                  hybrid: 350,
                  gasoline: 1250,
                  dealers: [
                    {
                      name: 'Madrid centro',
                      newSells: 1200,
                      preownedSells: 420,
                      financing: 750,
                      hybrid: 350,
                      gasoline: 1250,
                      dealers: [
                        {
                          name: 'Sebastián Gutierrez',
                          newSells: 20,
                          preownedSells: 23,
                          financing: 35,
                          hybrid: 3,
                          gasoline: 40,
                        },
                        {
                          name: 'Martín Sanz',
                          newSells: 15,
                          preownedSells: 35,
                          financing: 42,
                          hybrid: 12,
                          gasoline: 38,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        },
                        {
                          name: 'Lara Perez',
                          newSells: 32,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        }
                      ]
                    },
                    {
                      name: 'Cercanías',
                      newSells: 1200,
                      preownedSells: 420,
                      financing: 750,
                      hybrid: 350,
                      gasoline: 1250,
                      dealers: [
                        {
                          name: 'Sebastián Gutierrez',
                          newSells: 20,
                          preownedSells: 23,
                          financing: 35,
                          hybrid: 3,
                          gasoline: 40,
                        },
                        {
                          name: 'Martín Sanz',
                          newSells: 15,
                          preownedSells: 35,
                          financing: 42,
                          hybrid: 12,
                          gasoline: 38,
                        },
                        {
                          name: 'Alex Bazas',
                          newSells: 5,
                          preownedSells: 420,
                          financing: 750,
                          hybrid: 350,
                          gasoline: 1250,
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        mounted: function () {
            Metro.init();
        }
      })
}