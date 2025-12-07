import { CustomNavIcon } from "@/app";
import { setStore } from "@/pages/state/store";
import { createEffect } from "solid-js";

export default function ProjectGoed() {
    createEffect(() => {
        setStore("pageTitle", "Goed. Email");
    });
    return (
        <>
            <CustomNavIcon src="/goed-notext.png" href="/projects/goed" />
            <section
                id="contact"
                class="xl:px-[20%] px-3 min-h-full flex flex-col items-center justify-center my-auto mt-[10vh]"
            >
                <h1 class="font-heading text-3xl mb-5">Goed. Email</h1>
                <img src="/goed-slogan.png" class="rounded-xl shadow-md" />
                <div class="w-full px-5">
                    <h2 class=" mt-3 font-heading text-2xl">
                        Email done right.
                    </h2>
                    <p>
                        That's actually the slogan we chose; because we believe
                        email as it stands is flawed. Most clients are slow,
                        insecure, and they sell all your data. We want to make
                        an end to that
                    </p>
                    <br />
                    <h3 class=" mt-3 font-heading text-xl">
                        So how do we plan on doing that?
                    </h3>
                    <p>
                        It's deceptively simple, we plan on putting the customer
                        first. Our client is focussed on performance (more
                        technical details about that later). And our user data
                        model is built on full-encryption.
                    </p>
                </div>
            </section>
        </>
    );
}
