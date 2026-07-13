export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "abimanyu-gen-5",
    name: "Abimanyu Gen 5",
    category: "Meja Billiard",
    image: "/assets/images/abimanyu_gen5.webp",
    description:
      "Meja billiard unggulan untuk kebutuhan rumah, ruang hiburan, dan usaha billiard yang membutuhkan tampilan premium.",
    highlights: [
      "Cocok untuk kebutuhan rumah dan usaha",
      "Tampilan premium",
      "Dapat dikonsultasikan sesuai ukuran ruang",
    ],
  },
  {
    slug: "meja-8ft",
    name: "Meja 8ft",
    category: "Meja Billiard",
    image: "/assets/images/meja_8ft.webp",
    description:
      "Ukuran populer untuk pengguna yang membutuhkan keseimbangan antara kenyamanan bermain dan kebutuhan ruang.",
    highlights: [
      "Ukuran populer",
      "Cocok untuk ruang hiburan",
      "Dapat dikombinasikan dengan aksesoris pendukung",
    ],
  },
  {
    slug: "shaft-predator",
    name: "Shaft Predator",
    category: "Aksesoris",
    image: "/assets/images/shaft_predator.webp",
    description:
      "Aksesoris pendukung untuk pemain yang membutuhkan perlengkapan billiard lebih lengkap.",
    highlights: [
      "Aksesoris pendukung permainan",
      "Cocok untuk pemain serius",
      "Dapat dikonsultasikan dengan paket meja",
    ],
  },
  {
    slug: "simonis-cloth",
    name: "Simonis Cloth",
    category: "Aksesoris",
    image: "/assets/images/simonis_cloth.webp",
    description:
      "Kain meja billiard sebagai bagian penting dalam kenyamanan dan kualitas permainan.",
    highlights: [
      "Mendukung kenyamanan bermain",
      "Bagian penting dari kualitas meja",
      "Dapat dikonsultasikan sesuai kebutuhan meja",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}