// @ts-check
/**
 * UTM Link Generator
 * Plain JS + JSDoc, Node ESM style compatible.
 * Reads marketing/utm-links.csv and writes marketing/dist/utm-links.csv & .json with final URLs.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const REPO_ROOT = resolve(__dirname, '../../')
const INPUT_CSV = resolve(REPO_ROOT, 'marketing/utm-links.csv')
const OUT_DIR = resolve(REPO_ROOT, 'marketing/dist')
const OUT_CSV = resolve(OUT_DIR, 'utm-links.csv')
const OUT_JSON = resolve(OUT_DIR, 'utm-links.json')

/**
 * Minimal CSV parser for simple, headered CSV without quoted commas.
 * @param {string} csv
 * @returns {Array<Record<string,string>>}
 */
function parseCsv(csv) {
  const lines = csv.split(/\r?\n/).filter(Boolean)
  if (lines.length === 0) return []
  const headers = lines[0].split(',').map((h) => h.trim())
  return lines.slice(1).map((line) => {
    const cols = line.split(',')
    /** @type {Record<string,string>} */
    const row = {}
    headers.forEach((h, i) => { row[h] = (cols[i] ?? '').trim() })
    return row
  })
}

/**
 * Build final URL with UTM params.
 * @param {string} baseUrl
 * @param {string} path
 * @param {Record<string,string>} utm
 */
function buildUrl(baseUrl, path, utm) {
  const url = new URL(path || '/', ensureTrailingSlash(baseUrl))
  setIf(url, 'utm_source', utm.utm_source)
  setIf(url, 'utm_medium', utm.utm_medium)
  setIf(url, 'utm_campaign', utm.utm_campaign)
  setIf(url, 'utm_content', utm.utm_content)
  setIf(url, 'utm_term', utm.utm_term)
  return url.toString()
}

/** @param {string} url */
function ensureTrailingSlash(url) {
  return url.endsWith('/') ? url : url + '/'
}

/** @param {URL} url @param {string} k @param {string} v */
function setIf(url, k, v) {
  if (v && v.trim().length > 0) url.searchParams.set(k, v)
}

/** @typedef {{ base_url: string, path: string, utm_source: string, utm_medium: string, utm_campaign: string, utm_content: string, utm_term: string, notes: string }} InputRow */

/**
 * @param {InputRow} r
 */
function toOutput(r) {
  const final_url = buildUrl(r.base_url, r.path, r)
  return { ...r, final_url }
}

function main() {
  const csv = readFileSync(INPUT_CSV, 'utf8')
  const rows = /** @type {InputRow[]} */(parseCsv(csv))
  const out = rows.map(toOutput)

  mkdirSync(OUT_DIR, { recursive: true })
  // Write JSON
  writeFileSync(OUT_JSON, JSON.stringify(out, null, 2) + '\n', 'utf8')
  // Write CSV
  const headers = Object.keys(out[0] ?? { base_url: '', path: '', utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '', notes: '', final_url: '' })
  const lines = [headers.join(',')]
  for (const row of out) {
    lines.push(headers.map((h) => (row[h] ?? '').toString()).join(','))
  }
  writeFileSync(OUT_CSV, lines.join('\n') + '\n', 'utf8')
  console.log(`Generated ${OUT_CSV} and ${OUT_JSON}`)
}

main()


