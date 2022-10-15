<script lang="ts">
	import { goto } from "$app/navigation";
	import { SETTINGS } from "$lib/core/config";
	import { authToken, snackBar, user as storeUser } from "$lib/core/store";


let email: string;
let password: string;
async function login() {
    if (!email || !password) {
        snackBar.set("Debe ingresar un email y una contraseña");
        return;
    }
  const response = await fetch(`${SETTINGS.apiUrl}/v1/auth/email/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.ok) {
    const { token, user } = await response.json();
    authToken.sync(token);
    storeUser.sync(user);
    await goto("/");
  } else {
    snackBar.show("Usuario o contraseña incorrectos");
  }
}
</script>
<div class="auth_layout">
  <form class="auth" on:submit|preventDefault={() => login()} 
    >
      <h4>Iniciar sesión</h4>
      <div>
          <label for="email">Correo electrónico</label>
          <input type="email" name="email" id="email" bind:value={email} />

      </div>
      <div>
          <label for="password">Contraseña</label>
          <input type="password" name="password" id="password" bind:value={password} />
      </div>
      <input class="button" type="submit" value="Iniciar sesión" />
    </form>
</div>

<style lang="scss">
  .auth_layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .auth{
      width: 400px;
      padding: 1rem;
      display: grid;
      gap: 1rem;
      .button{
        background-color: #000;
        color: #fff;
        border: none;
        padding: 0.5rem;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      h4{
        text-align: center;
      }
    }
  }
</style>