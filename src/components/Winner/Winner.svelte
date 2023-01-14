<script>
    let players;
</script>

{#if players}
<div class="flex flex-col gap-10 p-4">
        <div class="flex flex-col gap-2 max-w-md self-center w-full items-center py-8 rounded-3xl bg-white shadow-xl border-t">
            <div class="bg-black rounded-full w-28 h-28"></div>
            <div class="text-7xl">🥇</div>
            <div class="text-6xl">{players[0]}</div>
        </div>
        <div class="flex flex-col items-center md:flex-row justify-center gap-20">
            {#each players as player, i}
                {#if i>0} 
                    <div class="flex flex-col grow-0 max-w-md gap-2 items-center px-20 py-8 rounded-3xl bg-white shadow-xl border-t">
                        <div class="bg-black rounded-full w-16 h-16"></div>
                        {#if i ===1}
                        <div class="text-4xl">🥈</div>
                        {:else}
                        <div class="text-4xl">🥉</div>
                        {/if}
                        <div class="text-base">{player}</div>
                    </div>
                {/if}
            {/each}
        </div>
</div>
{/if}