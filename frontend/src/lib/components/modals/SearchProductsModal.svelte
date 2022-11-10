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
    let toSelect: Producto;


let _data: Producto[] = [];

const dispatch = createEventDispatcher()

function onKeyPress(event: KeyboardEvent) {
    if (event.repeat) return;
    switch (event.key) {
        case "Escape":
            dispatch('close');
            event.preventDefault();
            break;
        case "Enter":
            if (toSelect) {
                dispatch('select', toSelect);
            }
            event.preventDefault();
            break;
        // navidate over table
        case "ArrowUp":
            event.preventDefault();
            if(toSelect) {
                const index = _data?.indexOf(toSelect);
                if(index > 0) {
                    toSelect = _data[index - 1];
                }
            } else {
                toSelect = _data[0];
            }
            break;
        case "ArrowDown":
            event.preventDefault();
            if(toSelect) {
                const index = _data?.indexOf(toSelect);
                if(index < _data?.length - 1) {
                    toSelect = _data[index + 1];
                }
            } else {
                toSelect = _data[0];
            }
            break;
        case "ArrowLeft":
            event.preventDefault();
            break;
        case "ArrowRight":
            event.preventDefault();
            break;
        default:
            break;
    }
}

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
                if(_data.length > 0) {
                    toSelect = _data[0];
                    console.log('set again');
                }
			} else {
				console.log(await response.text());
			}
		} catch (error) {
			snackBar.show('Error al cargar los datos');
		}
	}
    onMount(async () => {
        await _load();
        console.log('on mount');
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
                    class:focused={toSelect === product }
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
<svelte:window
    on:keydown={onKeyPress}
/>
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
    .focused{
        background-color: #e0e0e0;
    }
</style>