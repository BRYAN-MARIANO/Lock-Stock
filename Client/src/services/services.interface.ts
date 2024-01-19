


class Services {
    constructor() {

    }

    async getProfile () {
        try {
            const method = await fetch('');
            const data = await method.json();
            return { data }
        } catch (error) {
            console.log(error)
        }
    }
}