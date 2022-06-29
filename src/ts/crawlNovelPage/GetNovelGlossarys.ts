import { API } from '../API'
import { GlossaryItem, NovelSeriesGlossaryItem } from '../crawl/CrawlResult'

interface GlossaryResult {
  id: string
  seriesId: string
  name: string
  items: GlossaryItem[]
}

class GetNovelGlossarys {
  /**获取系列小说的设定资料 */
  public async getGlossarys(
    seriesId: string | number
  ): Promise<GlossaryResult[]> {
    return new Promise(async (resolve, reject) => {
      // 先获取设定资料的分类、每条设定资料的简略数据
      // 注意此时每条设定资料缺少 detail 数据（此时为 null）
      const glossaryData = await API.getNovelSeriesGlossary(seriesId)
      const result = glossaryData.body.categories as unknown as GlossaryResult[]

      if (result.length === 0) {
        return resolve(result)
      }

      // 请求每条设定资料的详细数据
      const promiseList: Promise<NovelSeriesGlossaryItem>[] = []

      // 发起请求
      for (const categorie of result) {
        for (const item of categorie.items) {
          promiseList.push(
            API.getNovelSeriesGlossaryItem(item.seriesId, item.id)
          )
        }
      }

      // 把每条请求结果里的 detail 数据填充到 result 里
      for await (const itemData of promiseList) {
        const data = itemData.body.item
        for (const categorie of result) {
          if (categorie.id === data.categoryId) {
            for (const item of categorie.items) {
              if (item.id === data.id) {
                item.detail = data.detail
                break
              }
            }
          }
        }
      }

      return resolve(result)
    })
  }

  /**把设定资料用特定格式存储起来 */
  public storeGlossaryText(data: GlossaryResult[]) {
    const array: string[] = []
    for (const categorie of data) {
      array.push(categorie.name)
      array.push('\n\n')

      for (const item of categorie.items) {
        array.push(item.name)
        array.push('\n')
        array.push(item.overview)
        array.push('\n\n')
        if (item.detail) {
          array.push(item.detail)
          array.push('\n\n')
        }
        array.push('----------------------------------------')
        array.push('\n\n')
      }
    }
    if (array.length > 0) {
      return array.join('') + '\n\n'
    }
    return ''
  }
}

const getNovelGlossarys = new GetNovelGlossarys()
export { getNovelGlossarys }
