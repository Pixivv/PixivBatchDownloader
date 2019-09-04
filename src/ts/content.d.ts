declare let zip: any

declare let Whammy: any

// 下载时要使用的作品信息
interface ImgInfo {
  id: string
  url: string
  title: string
  tags: string[]
  tagsTranslated: string[]
  user: string
  userid: string
  fullWidth: number
  fullHeight: number
  ext: string
  bmk: number
  date: string
  ugoiraInfo: UgoiraInfo
}

// tag 搜索页的作品数据
interface TagSearchResult {
  id: number
  e: string
  num: number
}

// 页面上的信息
interface PageInfo {
  p_title: string
  p_user: string
  p_uid: string
  p_tag: string
}

// 获取到的未分类书签的数据
interface BookmarkData {
  illustId: string
  illustTitle: string
  id: string
  title: string
  illustType: number
  xRestrict: number
  restrict: number
  sl: number
  url: string
  description: string
  tags: string[]
  userId: string
  userName: string
  width: number
  height: number
  pageCount: number
  isBookmarkable: boolean
  bookmarkData: {
    id: string
    private: boolean
  }
  profileImageUrl: string
}

// 从未分类书签中取出一些需要的数据
interface BookmarkResult {
  id: string
  tags: string
  restrict: boolean
}

// 动图每一帧的文件名和延迟
interface UgoiraInfo {
  frames?: { file: string; delay: number }[]
  mimeType?: string
}

// tag 搜索页里，作品信息的数据结构
interface TagSearchData {
  bookmarkCount: number
  height: number
  illustId: string
  illustTitle: string
  illustType: string
  isBookmarkable: boolean
  isBookmarked: boolean
  isPrivateBookmark: boolean
  isAdContainer: boolean
  pageCount: number
  responseCount: number
  tags: string[]
  url: string
  userId: string
  userImage: string
  userName: string
  width: number
}

// 画师列表页的列表数据，不带 tag。一些不需要使用的数据就简化了
interface Type2ListDataNoTag {
  error: boolean
  message: string
  body: {
    illusts: {
      [key: string]: null
    }
    manga: {
      [key: string]: null
    }
    novels: []
    mangaSeries: []
    novelSeries: []
    pickup: object
    bookmarkCount: object
    externalSiteWorksStatus: object
  }
}

// 画师列表页的列表数据，带 tag。一些不需要使用的数据就简化了
interface Type2ListDataHaveTag {
  error: boolean
  message: string
  body: {
    works: {
      illustId: string
      illustTitle: string
      id: string
      title: string
      illustType: number
      xRestrict: number
      restrict: number
      sl: number
      url: string
      description: string
      tags: string[]
      userId: string
      userName: string
      width: number
      height: number
      pageCount: number
      isBookmarkable: boolean
      bookmarkData: null | {
        id: string
        private: boolean
      }
    }[]
    total: number
    zoneConfig: {
      [key: string]: {
        [key: string]: string
      }
    }
    extraData: {
      meta: {
        [key: string]: {
          [key: string]: string
        }
      }
    }
  }
}

// 作品的数据
interface IllustData {
  error: boolean
  message: string
  body: {
    illustId: string
    illustTitle: string
    illustComment: string
    id: string
    title: string
    description: string
    illustType: number
    createDate: string
    uploadDate: string
    restrict: number
    xRestrict: number
    sl: number
    urls: {
      mini: string
      thumb: string
      small: string
      regular: string
      original: string
    }
    tags: {
      authorId: string
      isLocked: boolean
      tags: {
        tag: string
        locked: boolean
        deletable: boolean
        userId: string
        romaji: string
        translation?: {
          en: string
        }
        userName: string
      }[]
      writable: boolean
    }
    storableTags: string[]
    userId: string
    userName: string
    userAccount: string
    userIllusts: {
      [key: string]: null | {
        illustId: string
        illustTitle: string
        id: string
        title: string
        illustType: number
        xRestrict: number
        restrict: number
        sl: number
        url: string
        description: string
        tags: string[]
        userId: string
        userName: string
        width: number
        height: number
        pageCount: number
        isBookmarkable: boolean
        bookmarkData: null | {
          id: string
          private: boolean
        }
      }
    }
    likeData: boolean
    width: number
    height: number
    pageCount: number
    bookmarkCount: number
    likeCount: number
    commentCount: number
    responseCount: number
    viewCount: number
    isHowto: boolean
    isOriginal: boolean
    imageResponseOutData: []
    imageResponseData: []
    imageResponseCount: number
    pollData: null
    seriesNavData: null
    descriptionBoothId: null
    descriptionYoutubeId: null
    comicPromotion: null
    contestBanners: []
    isBookmarkable: boolean
    bookmarkData: {
      id: string
      private: boolean
    }
    contestData: null
    zoneConfig: {
      responsive: {
        url: string
      }
      '300x250': {
        url: string
      }
      '500x500': {
        url: string
      }
      header: {
        url: string
      }
      footer: {
        url: string
      }
      expandedFooter: {
        url: string
      }
      logo: {
        url: string
      }
    }
    extraData: {
      meta: {
        title: string
        description: string
        canonical: string
        alternateLanguages: []
        descriptionHeader: string
        ogp: {
          description: string
          image: string
          title: string
          type: string
        }
        twitter: {
          description: string
          image: string
          title: string
          card: string
        }
      }
    }
  }
}

// xzTip 的参数
interface XzTipArg {
  type: number
  x: number
  y: number
}

// xzSetting
interface XzSetting {
  imgNumberPerWork: number
  notdownType: string
  ugoiraSaveAs: string
  needTag: string
  notNeedTag: string
  displayCover: boolean
  quietDownload: boolean
  downloadThread: number
  userSetName: string
  tagNameToFileName: boolean
  showOptions: boolean
  [key: string]: string | number | boolean
}

// 进入全屏方法
interface LaunchFullScreen {
  [key: string]: (options?: FullscreenOptions | undefined) => Promise<void>
}

// 退出全屏方法
interface ExitFullscreen {
  [key: string]: () => Promise<void>
}

// 是否处于全屏状态
interface IsFullscreen {
  [key: string]: Element | null
}

// 浏览器下载时每个任务的信息
interface DonwloadInfo {
  no: number
  url: string
  thisIndex: number
  tabid: number
}

// 所有任务的信息
interface DonwloadListData {
  [key: number]: DonwloadInfo
}

// 下载完成后返回的信息
interface DownloadedMsg {
  msg: string
  data: DonwloadInfo
}
