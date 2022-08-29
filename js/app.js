

const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/avatar_1.jpg',
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50',
                    text: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './assets/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './assets/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51',
                        text: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        answers:[
            'L\'unica cosa chiara è la confusione.', 'Le finestre sono piene di giardini, viene voglia di pescare.', 
            'Non rinunciare ai tuoi sogni, continua a dormire.', 'Ammaccabanane',
            'Se ni\' mondo esistesse un po\' di bene e ognuin si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello.', 
            'L\'alcol non risolve i problemi, ma neanche l\'acqua.'
        ],
        currentIndex: -1,
        introImg: "./assets/intro.png ",
        newMessage: '',
        searchContact: '',
    },
    computed:{
       
    },
    methods:{
        openChat(index){
            this.currentIndex = index;
        },
        addMessage(currentIndex){
            if (this.newMessage != '') {  
                this.contacts[currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY  HH:mm'),
                    text: this.newMessage,
                    status: 'sent'
                });
            }
            this.autoReply(); 
            
        },
        autoReply(){
            setTimeout(() =>{
                this.contacts[this.currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YY HH:mm'),
                    text: this.randomAnswer(),
                    status: 'received',
                });
            },1000);
        },
        randomAnswer() {
            const random = Math.floor(Math.random() * this.answers.length);
            return this.answers[random];
        },
    }
})