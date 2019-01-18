<template>
    <div>
        <h3>Do not fire if MCR Transaction ID is blank</h3>
        <div
                v-for="mtidnofireoption in mtidnofireoptions"
                :key="mtidnofireoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="mtidnofirecode"
                        :value="mtidnofireoption.value"
                        :checked="mtidnofireoption.checked"
                        v-on:change="updateMTIDNoFire"
                />
                {{ mtidnofireoption.label }}
            </label>
        </div>
        <br />
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'ExcludeMTIDNoFire',
        data: () => ({
            mtidnofirecode: null,
            mtidnofireoptions: [
                {
                    key: 1,
                    value: 'DoNothing',
                    label: 'Do Nothing',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'ExcludeMTIDNoFire',
                    label: 'Do not fire if MCR Transaction ID is blank',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateMTIDNoFire () {
                if(this.mtidnofirecode === 'DoNothing'){
                    store.commit('doNothing')
                }else {
                    store.commit('nofire')
                }
            }
        }
    }
</script>