<script lang="ts">
	import { productoService } from "$lib/core/services";
	import { snackBar } from "$lib/core/store";
	import { createEventDispatcher, onMount } from "svelte";
	import Modal from "../common/Modal.svelte";
	import Search from "../common/Search.svelte";

    let _filter_obj = {
		_from: null,
		_to: null,
		_period: null
	};

    let limit = 50;
	let page = 1;

	let filterCount = 0;

	let sorting = 'created_at';

	let keyword = '';
    let _count = 0;


let _data: Producto[] = [];

const dispatch = createEventDispatcher()

async function onSearch(e: CustomEvent) {
		keyword = e.detail;
		page = 1;
		await _load();
	}

	async function _load() {
		try {
			const response = await productoService.query({
				limit,
				page,
				sorting,
				detalle: keyword,
				..._filter_obj
			});
			if (response.status === 200) {
				const _resData = await response.json();
				_data = _resData.data;
				_count = _resData.count;
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			snackBar.show('Error al cargar los datos');
		}
	}
    onMount(async () => {
        await _load();
    });
</script>
<Modal title="Productos" on:close>
    <div class="products">

    
    <div>
        <Search {keyword} on:search={onSearch} />
    </div>
    <div class="table">

    
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            {#each _data as product}
                <tr
                    on:click={() => dispatch("select", product)}
                >
                    <td>
                        {product.detalle}
                    </td>
                    <td>
                        {product.precio}
                    </td>
                    <td>
                        {product.cantidad}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
</div>
</Modal>
<style lang="scss">
    .products {
        display: grid;
        grid-gap: 1rem;
        grid-template-rows: auto 1fr;
        min-height: 100px;
        .table{
            overflow: auto;
        }
    }
</style>