<script>
    let players = ['first','second','third'];
</script>

<div class="flex flex-col gap-10">
    {#each players as player, i}
        {#if i === 0}
            <div class="flex flex-col gap-2 items-center">
                <div class="bg-black rounded-full w-16 h-16"></div>
                <div>🥇</div>
                <div class="text-6xl">{player}</div>
            </div>
        {:else}
            <div class="flex flex-col gap-2 items-center">
                <div class="bg-black rounded-full w-10 h-10"></div>
                {#if i ===1}
                <div>🥈</div>
                {:else}
                <div>🥉</div>
                {/if}
                <div class="text-base">{player}</div>
            </div>
        {/if}
    {/each}

</div>