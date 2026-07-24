<template>
    <div class="d-flex w-100">
        <button v-bind="$attrs" class="jetbrains btn bg-black text-light rounded-0 p-2 p-lg-3 d-flex align-items-center justify-content-center gap-2 text-center"><span
                class="square"></span>
            <slot />
        </button>
    </div>
</template>