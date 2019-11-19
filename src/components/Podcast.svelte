<script>
  export let icon;
  export let name;
  export let subtitle;
  export let plan;
</script>

<div class="podcast flex flex-col items-center px-4">
  <img
    class="w-20 h-20 object-cover rounded-full"
    src={icon}
    alt="Icon of {name}" />
  <h2 class="font-normal text-center text-xl leading-tight text-indigo-100">
    {name}
  </h2>
  <h3
    class="font-light text-center text-xs text-indigo-200 uppercase leading-snug
    tracking-wide">
    {subtitle}
  </h3>
  <div
    class="mt-1 px-1 text-xs uppercase tracking-tight font-bold bg-indigo-200
    text-indigo-800 rounded-lg shadow-none">
    {plan}
  </div>
</div>
