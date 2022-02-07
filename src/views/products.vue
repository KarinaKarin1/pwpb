<template>
    <div>
      <h1>products<h1>
          <ul v-for="produk in products" :key="produk.id">
              <li>{{ produk.harga }}</li>
          </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            products: ''
        }
    },
    mounted() {
         this.getProduk()

    },
         methods: 
         {
             async getProduk() {
                 let{data,error} = await this.$supabase
                    .from('tb_produk')
                    .select()

                 if(data) this.products = data
                 if(error) console.log(error)
             }
         }
    }
</script>

<style lang="scss" scoped>

</style>