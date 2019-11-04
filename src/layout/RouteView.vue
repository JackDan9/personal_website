<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class RouteView extends Vue {
    @Prop() private keepAlive!: boolean;

    private data () {
        return {};
    };

    public render () {
        const { $route: { meta }, $store: { getters } }:any = this;
        const inKeep:any = (
            <keep-alive>
                <router-view />
            </keep-alive>
        )
        const notKeep:any = ( <router-view /> )

        if (!getters.multiTab && meta.keepAlive === false) {
            return notKeep;
        }
        return this.keepAlive || getters.multiTab || meta.keepAlive ? inKeep : notKeep;
    }
};
</script>