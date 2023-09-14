import { ref } from 'vue'
export default {
  data() {
    return {
		visible: true,

        isAuth: true, 

        num: 5,

        obj: {
			hidden: false,
		},

        products: [
			{
				name: 'product1',
				price: 100,
				quantity: 5
			},
			{
				name: 'product2',
				price: 200,
				quantity: 4
			},
			{
				name: 'product3',
				price: 300,
				quantity: 3
			},
		],
	}
  },
  methods:{
    hide: function() {
		this.visible = false;
    },
    show:function(){
        this.visible = true;
    }
  },
  template: `<div>
  <p :class="obj">sggs</p>

  <p v-if="visible">text</p>
  <button @click="hide">hide</button>
  <button @click="show">show</button>

  <p v-if="isAuth">+++</p>
  <p v-else>---</p>


    <p v-if="num === 1">понедельник</p>
	<p v-if="num === 2">вторник</p>
	<p v-if="num === 3">среда</p>
    <p v-if="num === 4">четверг</p>
    <p v-if="num === 5">пятница</p>
    <p v-if="num === 6">суббота</p>
    <p v-if="num === 7">воскресенье</p>


   
    <table border=1 v-for="product in products">
	<tr>
		<td>{{product.name}}</td>
		<td>{{product.price}}</td>
		<td>{{product.quantity}}</td>
	</tr>
    </table>
	
  
  </div>`
}